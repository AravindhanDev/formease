import { alpha, styled } from "@mui/material/styles"
import { teal } from "@mui/material/colors"
import Switch from "@mui/material/Switch"

const TealSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: teal[600],
        "&:hover": {
            backgroundColor: alpha(
                teal[600],
                theme.palette.action.hoverOpacity
            ),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: teal[600],
    },
}))

export default TealSwitch
