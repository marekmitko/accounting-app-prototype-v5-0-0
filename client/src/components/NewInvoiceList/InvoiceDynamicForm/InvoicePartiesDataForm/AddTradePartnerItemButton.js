import * as React  from 'react';
import { TextField, useNotify, useCreate } from 'react-admin';
import { withStyles } from '@material-ui/core'
import MuiButton from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form'
import { useForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import Save from '@material-ui/icons/Save';
import MuiTextField from '@material-ui/core/TextField'

const TextInput = withStyles({
   root: {
       margin: '16px 0px'
   }
})(MuiTextField);

const Button = withStyles({
    root: {
        margin: '16px 0px'
    }
})(MuiButton);

const defaultSubscription = {
    submitting: true,
    pristine: true,
    valid: true,
    invalid: true,
};

const createTradePartnerItemButton = ({ version, onChange }) => {
    const [open, setOpen] = React.useState(false); // Controls modal 

    const [create, { loading }] = useCreate('tradePartners_list'); // Access dataProvider API call
    const notify = useNotify(); // Initialize notify object to send notification to dashboard
    const form = useForm(); // Gains access to the values in the
 
    const handleSubmit = async values => {
        create(
            { payload: { data: values } },
            {
                onSuccess: ({ data }) => {
                    setOpen(false);
                    notify('ra.notification.created', 'info', { smart_count: 1 }); // Default onSuccess function
                    form.change('id', data.id); // Add the new user to the userId reference input.
                    onChange() // Alert the form that something has changed
                },
                onFailure: ({ error }) => {
                    notify('Something went wrong.', 'error');
                }
            }
        );
    };

    return (<React.Fragment>
            <Button variant="outlined" color="primary" aria-label="create" onClick={() => setOpen(true)}>
                <AddIcon style={{ marginRight: '4px' }} /> Create Client
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create Client with Modal</DialogTitle>
                <DialogContent>
                    <Form
                        onSubmit={handleSubmit}
                        mutators={{ ...arrayMutators }} // necessary for ArrayInput
                        subscription={defaultSubscription} // don't redraw entire form each time one field changes
                        key={version} // support for refresh button
                        keepDirtyOnReinitialize
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField source="id" />
                                <Field name="company" label="NAZWA FIRMY">
                                    {props => (
                                        <div>
                                            <TextInput
                                                label={"company"}
                                                variant="filled"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                                <Field name="username" label="Username" >
                                    {props => (
                                        <div>
                                            <TextInput
                                                label={"Username"}
                                                variant="filled"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                                <Field name="address.street" label="Ulica" >
                                    {props => (
                                        <div>
                                            <TextInput
                                                label={"Street"}
                                                variant="filled"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                                <Field name="address.city" label="Miasto" >
                                    {props => (
                                        <div>
                                            <TextInput
                                                label={"CityName"}
                                                variant="filled"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                                <Field name="address.code" label="Kod" >
                                    {props => (
                                        <div>
                                            <TextInput
                                                label={"CityCode"}
                                                variant="filled"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                                <Field name="email" label="email" >
                                    {props => (
                                        <div>
                                            <TextInput
                                                label={"Email"}
                                                variant="filled"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                                <Field name="Phone" label="Telefon" >
                                    {props => (
                                        <div>
                                            <TextInput
                                                label={"numberPhone"}
                                                variant="filled"
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                                  <TextField source="id" />
                                <Button variant="contained" color="primary" type="submit" disabled={submitting || pristine}>
                                    <Save style={{ marginRight: '8px' }} /> Save
                                </Button>
                            </form>
                        )}
                    />
                </DialogContent>
            </Dialog>
        </React.Fragment> 
        )
}


export default createTradePartnerItemButton;