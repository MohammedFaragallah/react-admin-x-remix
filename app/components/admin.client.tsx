import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export function AdminClient() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} edit={EditGuesser} />
      <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
}
