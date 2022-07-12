import React, { Component } from 'react';
import './index.css'

class index extends Component {
    render() {
        const {users,isFirst,isSearch,isErr} = this.props
        console.log(users);
        return (
            <div className="row">
                {
                    isFirst ? <h1>请输入要搜索的用户名：</h1>:
                    isSearch ? <h1>正在搜索中…………</h1>:
                    isErr ? <h2>出错：{isErr}</h2>:
                    users.map((item) => {
                        return(
                            <div key={item.id} className="card">
                                <a rel="noopener noreferrer" href={item.html_url} target="_blank">
                                <img alt='head_portrait' src={item.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default index;