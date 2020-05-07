import React from 'react';

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <div style={{ minHeight: (window.innerHeight) }} className='loading'>
                <img src='/logo-loading.png' />
            </div>
        )
    }
}