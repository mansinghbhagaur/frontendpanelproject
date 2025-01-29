import {
      TableContainer,
      Table,
      TableHead,
      TableRow,
      TableCell,
      TableBody,
      Paper,
      Container,
      IconButton,
} from "@mui/material";

export const ReusabeTable = ({
      columns = [],
      rows = [],
      actions = [],
      width = "lg",
      headerStyle = {},
      bodyStyle = {},
      dynamicHeaderStyle = false,
      dynamicBodyStyle = false,
}) => {
      // Dynamic styles for header
      const dynamicHeader = dynamicHeaderStyle
            ? {
                  backgroundColor: '#ff5722',  // Dynamic header background
                  color: '#fff',                // White text
                  fontSize: '1.2rem',           // Larger font size for header
                  fontWeight: 'bold',           // Bold font
                  padding: '16px',              // Padding inside cells
            }
            : {
                  backgroundColor: '#1976d2',  // Default header background
                  color: '#fff',                // White text
                  fontSize: '1rem',             // Default font size for header
                  fontWeight: 'bold',           // Bold font
                  padding: '10px',              // Default padding
            };

      // Dynamic styles for body
      const dynamicBody = dynamicBodyStyle
            ? {
                  backgroundColor: '#f5f5f5',  // Dynamic background for body
                  fontSize: '1rem',             // Font size for body
                  color: '#333',                // Text color
                  "& tr:nth-of-type(odd)": {
                        backgroundColor: "#e0e0e0",  // Alternating row colors
                  },
            }
            : {
                  backgroundColor: '#fafafa',  // Default body background
                  fontSize: '1rem',             // Default font size for body
                  color: '#333',                // Default text color
                  "& tr:nth-of-type(odd)": {
                        backgroundColor: "#f5f5f5",  // Default alternating row color
                  },
            };

      return (
            <Container maxWidth={width}>
                  <Paper elevation={10} sx={{ mt: 2 }}>
                        <TableContainer sx={{ maxHeight: 440, width: "100%" }}>
                              <Table size="small">
                                    {/* Table Header with dynamic style */}
                                    <TableHead
                                          sx={{
                                                ...dynamicHeader,  // Apply dynamic header styles
                                                ...headerStyle,    // Merge with any custom styles passed from props
                                          }}
                                    >
                                          <TableRow>
                                                {columns?.map((column) => (
                                                      <TableCell
                                                            key={column.field}
                                                            sx={{
                                                                  ...dynamicHeader,  // Apply header cell styles
                                                                  ...headerStyle,    // Allow overriding via props
                                                            }}
                                                      >
                                                            {column.headerName}
                                                      </TableCell>
                                                ))}
                                                {actions.length > 0 && (
                                                      <TableCell
                                                            align="left"
                                                            sx={{
                                                                  ...dynamicHeader,  // Apply actions column styles
                                                                  ...headerStyle,    // Allow overriding via props
                                                            }}
                                                      >
                                                            Actions
                                                      </TableCell>
                                                )}
                                          </TableRow>
                                    </TableHead>

                                    {/* Table Body with dynamic style */}
                                    <TableBody
                                          sx={{
                                                ...dynamicBody,  // Apply dynamic body styles
                                                ...bodyStyle,    // Allow custom body styles to override
                                          }}
                                    >
                                          {rows?.map((row, index) => (
                                                <TableRow key={row.id || index}>
                                                      {columns?.map((column, index) => (
                                                            <TableCell
                                                                  key={column.field || index}
                                                                  sx={{
                                                                        ...dynamicBody,  // Apply cell styles for body
                                                                        ...bodyStyle,    // Allow custom body styles to override
                                                                        fontSize: '1rem', // Default font size for cells
                                                                        color: '#333',    // Default text color
                                                                  }}
                                                            >
                                                                  {row[column.field]}
                                                            </TableCell>
                                                      ))}
                                                      {actions.length > 0 && (
                                                            <TableCell align="left">
                                                                  {actions?.map((action, index) => (
                                                                        <IconButton
                                                                              key={index}
                                                                              onClick={() => action.onClick(row)}
                                                                        >
                                                                              {action.icon}
                                                                        </IconButton>
                                                                  ))}
                                                            </TableCell>
                                                      )}
                                                </TableRow>
                                          ))}
                                    </TableBody>
                              </Table>
                        </TableContainer>
                  </Paper>
            </Container>
      );
};