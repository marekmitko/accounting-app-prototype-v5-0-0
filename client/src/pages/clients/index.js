import ClientCreate from "./ClientCreate";
import ClientEdit from "./ClientEdit";
import ClientList from "./ClientList";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ClientList_icon from '@material-ui/icons/SupervisorAccount';

export default {
    list: ClientList,
    create: ClientCreate,
    edit: ClientEdit,
    icon: ClientList_icon,
    iconCreate: PersonAddIcon,
};