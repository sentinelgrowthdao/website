import React, { useEffect, useRef } from 'react';

export default function SpendingTable() {
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const loadScript = src =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const loadCss = href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };

    // Load CSS from CDN
    loadCss('https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css');

    // Inline CSS for alignment, text wrapping, and responsiveness
    const style = document.createElement('style');
    style.textContent = `
      .dataTables_wrapper {
        width: 100% !important;
        overflow-x: auto;
        box-sizing: border-box;
      }
      .dataTable {
        width: 100% !important;
        table-layout: fixed;
      }
      .dataTable th, .dataTable td {
        white-space: normal;
        word-wrap: break-word;
        box-sizing: border-box;
        padding: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .dataTable th:nth-child(1), .dataTable td:nth-child(1) {
        max-width: 150px;
      }
      .dataTable th:nth-child(2), .dataTable td:nth-child(2) {
        max-width: 200px;
      }
      .dataTable th:nth-child(3), .dataTable td:nth-child(3) {
        max-width: 150px;
      }
      .dataTable th:nth-child(4), .dataTable td:nth-child(4) {
        max-width: 300px;
      }
      .dataTable th:nth-child(5), .dataTable td:nth-child(5) {
        max-width: 100px;
      }
    `;
    document.head.appendChild(style);

    // Load scripts and initialize DataTable
    const initTable = async () => {
      try {
        await loadScript('https://code.jquery.com/jquery-3.7.0.min.js');
        await loadScript('https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js');

        const $table = window.$(tableRef.current);

        const table = $table.DataTable({
          processing: true,
          serverSide: true,
          ajax: {
            url: 'https://finance.sentineldao.com/api/spendinghistory',
            type: 'GET',
          },
          columns: [
            { data: 'spendedAt', title: 'Date' },
            {
              data: 'dest',
              title: 'Destination',
              render: (data, type) => {
                if (type === 'display' && data && data.length > 20) {
                  const start = data.substring(0, 10);
                  const end = data.substring(data.length - 10);
                  return `${start}...${end}`;
                }
                return data;
              },
            },
            {
              data: 'amount',
              title: 'Amount',
              render: (data, type, row) => {
                if (type === 'display' && data) {
                  const amount = parseFloat(data);
                  const formattedAmount = Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
                  return `${formattedAmount} ${row.denom || ''}`;
                }
                return data ? `${data} ${row.denom || ''}` : '';
              },
            },
            { data: 'memo', title: 'Note' },
            {
              data: null,
              title: 'Action',
              orderable: false,
              render: (data, type) => {
                if (type === 'display' && data && data.hash && data.denom) {
                  const hash = data.hash;
                  const denom = data.denom.toUpperCase();
                  if (denom === 'P2P') {
                    return `<a href="https://www.mintscan.io/sentinel/tx/${hash}" target="_blank" rel="noopener noreferrer">Explorer</a>`;
                  } else if (denom === 'OSMO') {
                    return `<a href="https://www.mintscan.io/osmosis/tx/${hash}" target="_blank" rel="noopener noreferrer">Explorer</a>`;
                  } else if (denom === 'ATOM') {
                    return `<a href="https://www.mintscan.io/cosmos/tx/${hash}" target="_blank" rel="noopener noreferrer">Explorer</a>`;
                  }
                }
                return '';
              },
            },
          ],
          order: [[0, 'desc']],
          autoWidth: false,
        });

        // Adjust columns and sync widths
        const adjustColumns = () => {
          table.columns.adjust();
          const $wrapper = window.$(wrapperRef.current);
          const $headerTable = $wrapper.find('.dataTable');
          const $bodyTable = $wrapper.find('.dataTable');
          $headerTable.css('width', '100%');
          $bodyTable.find('tr:first td').each((index, cell) => {
            const width = $(cell).outerWidth();
            $headerTable.find(`th:eq(${index})`).css('width', width);
          });
        };

        // Trigger adjustments
        table.on('init', () => setTimeout(adjustColumns, 200));
        table.on('draw', adjustColumns);
        table.on('xhr', () => setTimeout(adjustColumns, 100));

        // Handle window resize
        window.addEventListener('resize', adjustColumns);

        // Cleanup
        return () => {
          window.removeEventListener('resize', adjustColumns);
          if (window.$ && window.$.fn.dataTable.isDataTable(tableRef.current)) {
            window.$(tableRef.current).DataTable().destroy(true);
          }
        };
      } catch (err) {
        console.error('Failed to load DataTables scripts', err);
      }
    };

    initTable();
  }, []);

  return (
    <div ref={wrapperRef} style={{ overflowX: 'auto', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
      <table ref={tableRef} className="display" style={{ width: '100%' }} />
    </div>
  );
}