import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classNames from 'classnames'

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }

// export enum ButtonType{
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    /** Use this to add your class name */
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;

}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial< NativeButtonProps & AnchorButtonProps >

export const Button: FC<ButtonProps> = (props) =>{

    const {
        className,
        btnType,
        disabled,
        size,
        children,
        href,
        ...restProps
    } =props

    const classes = classNames('mw-btn', className, {
        [`mw-btn-${btnType}`]: btnType,
        [`mw-btn-${size}`]: size,
        'disabled':(btnType === 'link')&&disabled
    })

    if(btnType === 'link' && href){

        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )

    }else{
   
        return(
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
              
            >
                {children}
            </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button;

