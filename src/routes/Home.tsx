import { createGraphQLClient, gql } from "@solid-primitives/graphql";
import { User } from "../models/user.model";
import { For, Match, Switch } from "solid-js";

const getAllUsersQuery = gql`
  query {
      users {
          id
          name
      }
  }
`;

const newQuery = createGraphQLClient("https://foobar.com/v1/api");

export default function () {
  const [data] = newQuery<Partial<User>[]>(getAllUsersQuery)

  return (
    <div>
      <h1>Home</h1>
      <Switch fallback={<div>Loading...</div>}>
        <Match when={data.length === 0}>
          <div>No users</div>
        </Match>
        <Match when={data.length > 0}>
          <div>Users</div>
          <For each={data()}>
            {user => <div>{user.name}</div>}
          </For>
        </Match>
      </Switch>
    </div>
  );
}