import axios from "axios";

const USER_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhhczhRa09uUVNhNnhSQ3lCLWV3ViJ9.eyJuaWNrbmFtZSI6Im95ZXJvaGFiaWIyMzA1IiwibmFtZSI6Im95ZXJvaGFiaWIyMzA1QGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iZDg2MDI4YTc3NjFjODQ3Mzc3M2Q2NGExMzU2MmFkYT9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRm95LnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTA4LTA5VDIyOjM0OjQ4LjQ5NloiLCJpc3MiOiJodHRwczovL2xpc3R3aXNlLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MjY4NmIyYjZkOGZmODAwNjg0YjJjY2EiLCJhdWQiOiJ6dzhDaFRzMmhNd1hVbUl1TWJ3dzh2VWROeDB1T3NJSiIsImlhdCI6MTY2MDA4NDY2NSwiZXhwIjoxNjYwMTIwNjY1LCJub25jZSI6Ikp0aWJiTlBBWHpkZTRlNndBajJ0QlpaT0I3N2MzOFhrem9vUFN4SzdiXzgifQ.bhAYU5iqHF5Pehll8DY_YE8MB40zsb9_X-xVBoejv0jznmArQvKUtVeWMTUAnMyvkNZNhC2ujRaNBcKn9AAkweTHxI0gds91HNklBX0BRJ8yO1kULEzXyBBxEHcBdK8NxMm0WnpEGCiqLnQ1fsVp8pPpZRsnpvAnqFvrEFOF3QNBZWQZWw_E_K3L7SVRvZvBU0MmffhCoEAmKK7ZhQw_qHgdjekYZBWKLt3SvMUSWg9Z3c5f-Jwaj61LiMjKEgOAv0brOADGgJSFJix3AWsQxXjKaDZox7eY9w1HkFP792t98sM6cIVbSUH1MF1xb2VNc63mD5i_Cr_4G10k85EGBQ";

const AuthStr = "Bearer ".concat(USER_TOKEN);

const api = axios.create({
  baseURL: "https://api.listwise.net/api/",
  headers: { Authorization: AuthStr },
});

export const getMerchantData = () => {
  console.log("getMerchantData");
  api
    .get("/merchants")
    .then((response) => console.log(response.data.merchants));
};

export const getAllIssues = () => {
  console.log("getAllIssues");
  api
    .get("/payments/client/issues")
    .then((response) => console.log(response.data.issues));
};

export const getUserID = () => {
  console.log("getUserID");
  api
    .get("/merchants/constant/getId")
    .then((response) => console.log(response.data.merchant.userId));
};

export const getMerchantIssue = () => {
  console.log("getMerchantIssue");
  api
    .get(`/payments/client/issues/62686b2b6d8ff800684b2cca/all`)
    .then((response) => console.log(response.data));
};

let merchantIssue = {
  issue: {
    merchantId: "62686b2b6d8ff800684b2cca",
    issueOn: "62a88ac028d0fd9868bf4c1a",
    issueDescription: "New issue from VSCode while testing axios",
    title: "axios issue testing",
  },
};

export const postMerchantIssue = () => {
  console.log(postMerchantIssue);
  api
    .post("/payments/client/issues", merchantIssue)
    .then((response) => console.log(response.data));
};

export const deleteMerchantIssue = () => {
  console.log(deleteMerchantIssue);
  api
    .delete("/payments/client/issues/62f307078d36bcbb87a915fc")
    .then((response) => console.log(response.data));
};
