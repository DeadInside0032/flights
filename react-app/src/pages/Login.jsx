import { Component } from "react";
import LoginForm from "../components/LoginForm";
import { Card } from "react-bootstrap";
export default class Login extends Component {
    render() {
        return (
            <Card>
                <LoginForm onLogin={this.props.onLogin}/>
            </Card>
        )
    }
}