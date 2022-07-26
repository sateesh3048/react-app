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
    if (!isValidEmail(email)) {
      setErr("Email is invalid");
      return;
    }
    try {
      const res = await sendInvitation(email, token);
      await showResp(res);
    } catch (err) {
      console.log("Something went wrong!");
      console.log(err);
    }

    setEmail("");
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
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
        {err && <h2 style={{ color: "red" }}>{err}</h2>}
      </Row>
      <Row>
        <Form onSubmit={sendInvite}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email for sending invitation"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              Please enter email for inviting your friend to site.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invite your friend
          </Button>
        </Form>
      </Row>
    </>
  );
};

export default Referral;
