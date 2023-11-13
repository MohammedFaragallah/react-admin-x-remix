import { Admin, ListGuesser, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import { PostCreate, PostEdit, PostList } from "./posts";

import { Dashboard } from "./Dashboard";
import { LoginPage } from "ra-supabase";

export function AdminClient() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      loginPage={LoginPage}
      basename="/admin"
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource
        name="comments"
        list={ListGuesser}
        recordRepresentation="name"
        show={ShowGuesser}
      />
    </Admin>
  );
}
