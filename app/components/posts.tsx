import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";

const postFilters = [<TextInput key="q" source="q" label="Search" alwaysOn />];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="content" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
