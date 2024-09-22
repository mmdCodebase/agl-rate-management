import { Button, Stack } from "@mui/material";
import {
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
// components
import AppDataGrid from "../../components/AppDataGrid";
import { useTheme } from "@mui/material/styles";

function Dashboard() {
  const headerClassName = "all-data";
  const theme = useTheme();
  const columns: GridColDef[] = [
    {
      field: "fob_origin",
      headerName: "FOB Origin",
      headerClassName,
      flex: 3,
    },
    {
      field: "via",
      headerName: "VIA",
      headerClassName,
      flex: 1,
    },
    {
      field: "cy",
      headerName: "CY",
      headerClassName,
      flex: 1,
    },
    {
      field: "destination",
      headerName: "Destination",
      headerClassName,
      flex: 1,
    },
    {
      field: "move_type",
      headerName: "Move Type",
      headerClassName,
      flex: 1,
    },
    {
      field: "size",
      headerName: "Size",
      headerClassName,
      flex: 1,
    },
    {
      field: "drayage",
      headerName: "Drayage",
      headerClassName,
      flex: 1,
    },
    {
      field: "of",
      headerName: "O/F",
      headerClassName,
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      headerClassName,
      flex: 1,
    },
  ];

  const rows: any[] = [{
    id:1,
    fob_origin:"Ningbo/Shanghai/Xingang/Qingdao/Shenzhen/Vietnam",
    via:"USWC",
    cy:"CHI",
    destination:"Janesville, WI",
    move_type:"Port/Door",
    size:"40'/40'HC",
    drayage:"$1,100.00",
    of:"$7,550.00",
    total:"$8,650.00"
  },
  {
    id:2,
    fob_origin:"Ningbo/Shanghai/Xingang/Qingdao/Shenzhen/Vietnam",
    via:"USWC",
    cy:"CHI",
    destination:"Janesville, WI",
    move_type:"Port/Door",
    size:"40'/40'HC",
    drayage:"$1,100.00",
    of:"$7,550.00",
    total:"$8,650.00"
  },
  {
    id:3,
    fob_origin:"Ningbo/Shanghai/Xingang/Qingdao/Shenzhen/Vietnam",
    via:"USWC",
    cy:"CHI",
    destination:"Janesville, WI",
    move_type:"Port/Door",
    size:"40'/40'HC",
    drayage:"$1,100.00",
    of:"$7,550.00",
    total:"$8,650.00"
  },
  {
    id:4,
    fob_origin:"Ningbo/Shanghai/Xingang/Qingdao/Shenzhen/Vietnam",
    via:"USWC",
    cy:"CHI",
    destination:"Janesville, WI",
    move_type:"Port/Door",
    size:"40'/40'HC",
    drayage:"$1,100.00",
    of:"$7,550.00",
    total:"$8,650.00"
  },
  {
    id:5,
    fob_origin:"Ningbo/Shanghai/Xingang/Qingdao/Shenzhen/Vietnam",
    via:"USWC",
    cy:"CHI",
    destination:"Janesville, WI",
    move_type:"Port/Door",
    size:"40'/40'HC",
    drayage:"$1,100.00",
    of:"$7,550.00",
    total:"$8,650.00"
  },
  {
    id:6,
    fob_origin:"Ningbo/Shanghai/Xingang/Qingdao/Shenzhen/Vietnam",
    via:"USWC",
    cy:"CHI",
    destination:"Janesville, WI",
    move_type:"Port/Door",
    size:"40'/40'HC",
    drayage:"$1,100.00",
    of:"$7,550.00",
    total:"$8,650.00"
  },
  {
    id:7,
    fob_origin:"Ningbo/Shanghai/Xingang/Qingdao/Shenzhen/Vietnam",
    via:"USWC",
    cy:"CHI",
    destination:"Janesville, WI",
    move_type:"Port/Door",
    size:"40'/40'HC",
    drayage:"$1,100.00",
    of:"$7,550.00",
    total:"$8,650.00"
  }];

  const toolbar = () => (
    <GridToolbarContainer
      sx={{ justifyContent: "space-between", p: 1 }}
    >
      <Stack direction="row">
        <GridToolbarColumnsButton slotProps={{ button: { color: theme.palette.mode === 'dark'?"success":"info" } }} />
        <GridToolbarFilterButton slotProps={{button: { color: theme.palette.mode === 'dark'?"success":"info" }}} />
      </Stack>
      <Button color={theme.palette.mode === 'dark'?"success":"info"}>Download as CW Upload template</Button>
    </GridToolbarContainer>
  );

  return (
         <AppDataGrid
          columns={columns}
          rows={rows}
          headerClassName={headerClassName}
          toolbar={toolbar}
          sx={{ height: 800,width:'100%'}}
        /> 

  );
}

export default Dashboard;
