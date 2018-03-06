import React from 'react';

export default class Router extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            actualPath: window.location.hash.replace('#', '')
        }
        window.onhashchange = this.onHashChange;
    }

    onHashChange = () => {
        const hash = window.location.hash.replace('#', '');
        this.setState({
            actualPath: hash
        });
    }

    render() {
        const {actualPath} = this.state;
        const {config} = this.props;
        const Component = config
            .find((item) => item.path === actualPath)
            .component;
        if(Component){
            return <Component/>
        }
        return null;
    }
}