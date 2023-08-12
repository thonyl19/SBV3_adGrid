import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { AgGridVue } from 'ag-grid-vue3';
import { createApp, onBeforeMount, ref } from 'vue';
//import './styles.css';

export default  {
  template: `
        <div style="height: 100%">
            <ag-grid-vue
                
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                :columnDefs="columnDefs"
                @grid-ready="onGridReady"
                :rowData="rowData"
                :defaultColDef="defaultColDef"
                :sideBar="true"></ag-grid-vue>
        </div>
    `,
  components: {
    'ag-grid-vue': AgGridVue,
  },
  setup(props) {
    const columnDefs = ref([
      { field: 'athlete', minWidth: 170 },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ]);
    const gridApi = ref();
    const gridColumnApi = ref();
    const defaultColDef = ref({
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    });
    const rowData = ref(null);

    onBeforeMount(() => {});

    const onGridReady = (params) => {
      gridApi.value = params.api;
      gridColumnApi.value = params.columnApi;

      const updateData = (data) => params.api.setRowData(data);

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => updateData(data));
    };

    return {
      columnDefs,
      gridApi,
      gridColumnApi,
      rowData,
      defaultColDef,
      onGridReady,
    };
  },
};

//createApp(VueExample).mount('#app');