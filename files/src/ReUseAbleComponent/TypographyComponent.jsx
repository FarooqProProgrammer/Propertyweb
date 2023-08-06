import { Typography } from "@mui/material"

export const TypographyComponent = ({ children, className, style, varient }) => {
    return <Typography style={style} className={className} varient={varient}>{children}</Typography>
}