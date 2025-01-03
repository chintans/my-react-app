import React from "react";
import { Box, Grid, Paper, Typography, Stack, Divider } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Sample Data
const revenueData = [
  { name: "Mar 2023", revenue: 24000, target: 22000 },
  { name: "Jun 2023", revenue: 30000, target: 28000 },
  { name: "Sep 2023", revenue: 28000, target: 30000 },
  { name: "Dec 2023", revenue: 32000, target: 31000 },
  { name: "Mar 2024", revenue: 34000, target: 32000 },
  { name: "Jun 2024", revenue: 35500, target: 33000 },
  { name: "Sep 2024", revenue: 32823, target: 31000 },
];

const salesByEcommerce = [
  { name: "Amazon", value: 45 },
  { name: "Tokopedia", value: 25 },
  { name: "Alibaba", value: 30 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Top spacing to avoid content behind the AppBar */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>

        {/* Metrics Row */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Total Income
              </Typography>
              <Typography variant="h6">$32,499.93</Typography>
              <Typography variant="body2" color="success.main">
                +12.95% Compared to last month
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Profit
              </Typography>
              <Typography variant="h6">$10,499.93</Typography>
              <Typography variant="body2" color="error.main">
                -0.33% Compared to last month
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Total Views
              </Typography>
              <Typography variant="h6">5,211,832</Typography>
              <Typography variant="body2" color="success.main">
                +0.32% Compared to last month
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Conversion Rate
              </Typography>
              <Typography variant="h6">4.83%</Typography>
              <Typography variant="body2" color="success.main">
                +8.05% Compared to last month
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* Revenue Over Time */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Revenue Over Time
                </Typography>
                <Box sx={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#82ca9d"
                      />
                      <Line type="monotone" dataKey="target" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Grid>

            {/* Sales by e-commerce platform (Pie Chart) */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Sales by E-commerce Platform
                </Typography>
                <Box sx={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={salesByEcommerce}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                      >
                        {salesByEcommerce.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Grid>

            {/* Example of another stats card, e.g. "Session by Country" */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Session by Country
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={1}>
                  <Typography>Australia: 634 (+8%)</Typography>
                  <Typography>Indonesia: 589 (+7.2%)</Typography>
                  <Typography>Thailand: 562 (+6.2%)</Typography>
                  <Typography>Germany: 453 (+5.4%)</Typography>
                </Stack>
              </Paper>
            </Grid>

            {/* Example of "Registered Users" gauge/card */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Registered Users
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h4">2,324</Typography>
                <Typography variant="body2">Total Users</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="body2">Premium Plan: 1,809</Typography>
                  <Typography variant="body2">Basic Plan: 515</Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Example of "Sales by Region" spider chart, or a placeholder */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Sales by Region
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2">
                  (Placeholder for a radar/spider chart or region data)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
