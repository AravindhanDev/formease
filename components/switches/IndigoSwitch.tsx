import { alpha, styled } from "@mui/material/styles"
import { indigo } from "@mui/material/colors"
import Switch from "@mui/material/Switch"

const IndigoSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: indigo[600],
        "&:hover": {
            backgroundColor: alpha(
                indigo[600],
                theme.palette.action.hoverOpacity
            ),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: indigo[600],
    },
}))

export default IndigoSwitch
