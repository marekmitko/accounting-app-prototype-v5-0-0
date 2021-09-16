


import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import {Add, Delete,} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

import {TextInput, NumberInput, BooleanInput} from 'react-admin'

class ItemTableCreate extends React.Component {
        dynField (i, prop) {
        const {record} = this.props
        const {items} = record
        const item = items[i]
    
        return {
            label: false,
            value: item[prop],
            handleChange: newValue => {
            item[prop] = newValue
            this.setState({ record })
            },
            source: `items[${i}].id`
        }
        }
    
        render () {
        const {record} = this.props
    
        if (!record) {
            return (<div />)
        }
    
        const items = record.items || (record.items = [])
    
        if (!items.length) {
            items.push({id: 'never displayed', total: 0, allowUsed: false})
        }
    
        const itemsReact = items.map((item, i) => (
            <TableRow>
            <TableCell>
                {i ? (
                <IconButton color='secondary' onClick={() => { delete items[i]; this.setState({ record }) }}>
                    <Delete />
                </IconButton>
                ) : (
                <IconButton color='primary' onClick={() => { items.unshift({}); this.setState({ record }) }}>
                    <Add />
                </IconButton>
                )}
            </TableCell>
            <TableCell><TextInput className='label-shrink' {...this.dynField(i, 'id')} {...this.props} /></TableCell>
            <TableCell><NumberInput className='label-shrink' {...this.dynField(i, 'total')} /></TableCell>
            <TableCell><BooleanInput {...this.dynField(i, 'allowUsed')} /></TableCell>
            </TableRow>
        ))
    
        return (
            <Table>
            <TableHead>
                <TableRow>
                <TableCell />
                <TableCell>Artikelbezeichnung</TableCell>
                <TableCell>Menge</TableCell>
                <TableCell>Gebraucht erlauben</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {itemsReact}
            </TableBody>
            </Table>
        )
        }
    }


    export default ItemTableCreate;