import { alpha, styled } from "@mui/material/styles"
import { cyan } from "@mui/material/colors"
import Switch from "@mui/material/Switch"

const CyanSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: cyan[600],
        "&:hover": {
            backgroundColor: alpha(
                cyan[600],
                theme.palette.action.hoverOpacity
            ),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: cyan[600],
    },
}))

export default CyanSwitch
