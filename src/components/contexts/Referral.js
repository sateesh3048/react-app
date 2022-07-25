import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { sendInvitation } from "../apis/InvitationApi";
import { useAuth } from "./AuthContext";
const Referral = () => {
  const { token } = useAuth();
  const [email, setEmail] = useState("");
  const [variant, setVariant] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  async function sendInvite(event) {
    event.preventDefault();
    if (!email) return;
    console.log(email);
    try {
      const res = await sendInvitation(email, token);
      await showResp(res);
    } catch (err) {
      console.log(err);
      console.log("Unable to login");
    }

    // setEmail("");
  }

  function showResp(resp) {
    if (resp.type === "error") {
      setVariant("danger");
      setErr(resp.errors);
    } else {
      setVariant("info");
    }
    setMsg(resp.msg);
  }
  return (
    <>
      <Row>
        <Alert variant={variant}>{msg}</Alert>
      </Row>
      <Row>
        <form onSubmit={sendInvite}>
          <Row>
            <input
              type="text"
              placeholder="Enter email for sending invitation"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Row>
          <input type="submit" value="Invite" />
        </form>
      </Row>
    </>
  );
};

export default Referral;
