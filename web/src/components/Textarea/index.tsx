import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

/*
    TextareaHTMLAttributes -> Utilizado para poder receber os atributos do Textarea utilizando o ...rest
*/

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;