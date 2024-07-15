const { test, expect } = require("@playwright/test");

var userid;
test("Get Users", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");

  console.log(await response.json());
  await expect(response.status()).toBe(200);
});

test("Create User", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "morpheus",
      job: "leader",
    },
    headers: { Accept: "application/json" },
  });
  console.log(await response.json());
  await expect(response.status()).toBe(201);
  userid = await response.json().id;
});

test("Update User", async ({ request }) => {
  const response = await request.put(`https://reqres.in/api/users/${userid}`, {
    data: { job: "walker" },
  });

  console.log(await response.json());
  await expect(response.status()).toBe(200);
});

test("Delete User", async ({ request }) => {
  const response = await request.delete(
    `https://reqres.in/api/users/${userid}`
  );
//   console.log(await response.json());
  await expect(response.status()).toBe(204);
});
