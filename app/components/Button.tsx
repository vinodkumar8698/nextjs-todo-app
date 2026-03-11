import React, { CSSProperties, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger" | "outline";
type Size = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    loading?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    loading = false,
    disabled = false,
    style,
    ...rest
}) => {
    const baseStyle: CSSProperties = {
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.6 : 1
    };

    const variants: Record<Variant, CSSProperties> = {
        primary: { background: "#007bff", color: "#fff" },
        secondary: { background: "#6c757d", color: "#fff" },
        danger: { background: "#dc3545", color: "#fff" },
        outline: { background: "transparent", border: "1px solid #ccc", color: "#333" }
    };

    const sizes: Record<Size, CSSProperties> = {
        small: { padding: "6px 12px", fontSize: "12px" },
        medium: { padding: "8px 16px", fontSize: "14px" },
        large: { padding: "12px 20px", fontSize: "16px" }
    };

    return (
        <button
            disabled={disabled || loading}
            style={{
                ...baseStyle,
                ...variants[variant],
                ...sizes[size],
                ...style
            }}
            {...rest}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default Button;