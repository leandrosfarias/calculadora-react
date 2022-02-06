import './Botao.css';

export default props => {
    return (
        <button 
        onClick={() => props.click(props.label)}
        className={`
            botao
            ${props.operacao ? 'operacao' : ''}
            ${props.dobro ? 'dobro' : ''}
            ${props.triplo ? 'triplo' : ''}
        `}>
            {props.label}
        </button>
    )
}
