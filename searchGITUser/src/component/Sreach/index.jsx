import React, { Component } from 'react';
import axios from 'axios';

class index extends Component {
    keyWordSreach = () => {
        this.props.updateState({isFirst:false,isSearch:true})
        console.log(this.keyWordElement);
        const {keyWordElement:{value:keyWord}} = this
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            (response) => {
                this.props.updateState({isSearch:false,users:response.data.items});
            },
            (error) => {
                console.log(error);
                this.props.updateState({isSearch:false,isErr:error.message})
            }
        )

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref = {(c) => {this.keyWordElement = c}}type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.keyWordSreach}>点击搜索</button>
                </div>
            </section>
        );
    }
}

export default index;