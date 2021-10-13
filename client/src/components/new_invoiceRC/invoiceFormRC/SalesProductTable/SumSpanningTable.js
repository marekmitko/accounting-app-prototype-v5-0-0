import * as React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import SubArrIteratorItem from './SubArrIteratorItem';



// zobaczyć sobie co ma rest po ...rest 

// const SumSpanningTable = ({source, fields,  dataInitOnClickAddItem,  dataSelectFieldSalesItem, rest }) => {
const SumSpanningTable = ({source, fields,  dataInitOnClickAddItem,  dataSelectFieldSalesItem }) => {
        
        // console.log("%c rest ", "color:pink; font-weight:900; background-color:#FF5733;", 
        //    source, fields, console.count('count'));

        return (  
            
            
            <TableContainer component={Paper}>
        {/*>> ->CONTAINER=> SalesTable in Table */}
            {/* <ArrayInput source='subSalesTable' label="" > */}
                <SubArrIteratorItem propsSalesTable={{source, fields,  dataInitOnClickAddItem,  dataSelectFieldSalesItem, }}  />
            {/* </ArrayInput> */}
        {/* X <-CONTAINER=> SalesTable in Table */}
        </TableContainer>
    )
};
export default SumSpanningTable;



// const useStyles = makeStyles({
    
//     table: {
//         minWidth: 700,
//         borderSpacing: 0,
//     },
//     IteratorRowProduct: {
//         "& tr": {
//             "& td": {
//                 paddingTop: 14,
//                 paddingLeft: 2,
//                 paddingBottom: 14,
//                 paddingRight: 2,
//                 "& selectinput": {
//                     "& div": {
//                         minWidth: 80,
//                         },
//                     },
//             },
//         },

//     },
//     select: {
//         "& ul": {
//             backgroundColor: "#cccccc",
//         },
//         "& li": {
//             fontSize: 14,
//         },
//     },
//     helperTextIsNONE: {
//         fontSize: 14,
//         "& p": {
//             display: 'none',
//         },
//     },

// });

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }
