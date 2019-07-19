import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm'


class Releases extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 01',
                    releaseDate: '01/01/2017'
                },
                {
                    id: 2,
                    releaseName: 'Release 02',
                    releaseDate: '01/01/2018'
                },
                {
                    id: 3,
                    releaseName: 'Release 03',
                    releaseDate: '01/01/2019'
                },
                {
                    id: 4,
                    releaseName: 'Release 04',
                    releaseDate: '01/01/2020'
                }
            ]
        }
    }

    handleSubmit(e,{name,date}){
        e.preventDefault();
        let state = this.state;
        let myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)});
        console.log(name);
        console.log(date);       
    }

    render() {
        return (
            <div className = "conteiner">
                <ReleaseForm submitHandler={this.handleSubmit}/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm">Remover</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Releases;