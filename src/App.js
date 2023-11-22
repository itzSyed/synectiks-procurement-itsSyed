import logo from './logo.svg';
import Priority from './priorityBtn/priority';
// import PurchaseRequest from './purchaseRequest/purchaseReq';
// import RequisitionsCards from './cardCompo/RequistinCars';
import OrderTable from './orderLine-Table/orderLine';
// import StatusBtn from './statusBtn/statusBtn';
// import ResolveBtn from './resolveBtn/resolveBtn';
import RequisitionsTable from './RequisationTable/requisationTable';
import FilterBtn from './filterBtn/filterBtn';
import RenderBarChart from './chartsCompo/charts';
import './App.css';

function App() {
  return (
    <>
   
    {/* <RequisitionsCards/> */}
    {/* <PurchaseRequest/> */}
    {/* <ResolveBtn/> */}
    {/* <StatusBtn/> */}
    <RenderBarChart/>
    <FilterBtn/>
    <RequisitionsTable/>
    <Priority/>
    <OrderTable/>
    </>
  );
}

export default App;
