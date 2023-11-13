import { Datagrid, EmailField, List, TextField, UrlField } from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
