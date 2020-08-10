import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

/*
    Ao utilizar o React.FC<PageHeaderProps> dizemos que nas props existem as propriedades 
    da interface PageHeaderProps, asism é possível passar o title ao utilizar o PageHeader.
    Deve ser no formato de variavel const para funcionar desta maneira (não pode ser function).

    props.children -> É tudo que vem dentro da tag PageHeader. 
    
    Exemplo na página index do TeacherList
*/


interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;