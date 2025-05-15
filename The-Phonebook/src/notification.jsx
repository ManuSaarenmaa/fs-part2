const Notification = ({ message}) => {
    if (!message.message) {
        return null
    }
    const notificationStyles = {
        color: message.type === 'success' ? 'green' : 'red',
        background: 'lightgrey',
        fontSize: '20px',
        border: `2px solid ${message.type === 'success' ? 'green' : 'red'}`,
        padding: '10px',
        marginbottom: '10px',
        borderRadius: '5px',
    }


    return (
        <div style={notificationStyles}>
            {message.message}
        </div>
    )
}
export default Notification