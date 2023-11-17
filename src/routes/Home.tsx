import { createGraphQLClient, gql } from "@solid-primitives/graphql";
import { User } from "../models/user.model";
import { For, Match, Switch, createEffect, createMemo } from "solid-js";

const getAllUsersQuery = gql`
  query Users {
    users {
      id
      name
    }
  }
`;

const newQuery = createGraphQLClient("http://localhost:4000");

export default function () {
  const [data] = newQuery<{ users: Partial<User>[] }>(getAllUsersQuery);

  createEffect(() => {
    console.log(data());
  })

  return (
    <div>
      <h1>Home</h1>
      <Switch fallback={<div>Loading...</div>}>
        <Match when={data()?.users?.length === 0}>
          <div>No users</div>
        </Match>
        <Match when={data()?.users}>
          <div>Users</div>
          <For each={data()?.users}>
            {user => <div>{user.name}</div>}
          </For>
        </Match>
      </Switch>
    </div>
  );
}