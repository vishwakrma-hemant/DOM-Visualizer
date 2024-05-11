"use client";
import {
  Box,
  Center,
  Grid,
  GridCol,
  Group,
  Paper,
  RingProgress,
  Text,
  rem,
} from "@mantine/core";

import React, { useEffect, useState } from "react";
import PieChart from "./Pie";
import { IconUser } from "@tabler/icons-react";

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
};

const data = [
  {
    country: "AD",
    "hot dog": 31,
    "hot dogColor": getRandomColor(),
  },
  {
    country: "AE",
    "hot dog": 94,
    "hot dogColor": getRandomColor(),
  },
  {
    country: "AF",
    "hot dog": 13,
    "hot dogColor": getRandomColor(),
  },
  {
    country: "AG",
    "hot dog": 148,
    "hot dogColor": getRandomColor(),
  },

];
const data2 = [
  {
    id: "go",
    label: "go",
    value: 392,
  },
  {
    id: "sass",
    label: "sass",
    value: 564,
  },
  {
    id: "hack",
    label: "hack",
    value: 420,
  },

];

const data3 = [
  {
    id: "japan",
    color: "hsl(327, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 1,
      },
      {
        x: "helicopter",
        y: 36,
      },
    
    ],
  },
  {
    id: "france",
    color: "hsl(289, 70%, 50%)",
    data: [
      {
        x: "moto",
        y: 83,
      },
      {
        x: "skateboard",
        y: 141,
      },
      {
        x: "others",
        y: 267,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(92, 70%, 50%)",
    data: [
      {
        x: "moto",
        y: 113,
      },
      {
        x: "bicycle",
        y: 34,
      },
      {
        x: "horse",
        y: 41,
      },
      {
        x: "skateboard",
        y: 27,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(44, 70%, 50%)",
    data: [
      {
        x: "subway",
        y: 180,
      },
      {
        x: "bus",
        y: 89,
      },
      {
        x: "horse",
        y: 118,
      },
      {
        x: "skateboard",
        y: 260,
      }
    ],
  },
];

const StatCard = ({ stat, Icon }) => {
    if (!stat || stat.progress === undefined || stat.color === undefined) {
        return null; // or return a loading spinner, or some placeholder content
      }
  return (
    <Paper withBorder radius="md" p="xs" key={stat.label}>
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          sections={[{ value: stat.progress, color: stat.color }]}
          label={
            <Center>
              <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            </Center>
          }
        />

        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {stat.label}
          </Text>
          <Text fw={700} size="xl">
            {stat.stats}
          </Text>
        </div>
      </Group>
    </Paper>
  );
};

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const [pieData, setPieData] = useState([]);
 

  const formatPieData = (data, key) => {
    const uniqueValues = getUniqueValues(data, key);
    const formattedData = uniqueValues.map((value) => {
      const count = data.filter((item) => item[key] === value).length;
      return { id: value, label: value, value: count };
    });
    return formattedData;
  };

  const getUniqueValues = (data, key) => {
    const uniqueValues = data.map((item) => item[key]);
    return [...new Set(uniqueValues)];
  };

  function formatDataForBarChart(users) {
    // Create an empty object to store the counts
    console.log(users[0]);
    const counts = {};
    const DateKeys = users.map(
      (user) => new Date(user.createdAt).toISOString().split("T")[0]
    );

    // Iterate over the array of users
    for (let user of users) {
      // Convert the registration date to a string in the format 'yyyy-mm-dd'
      const date = new Date(user.createdAt).toISOString().split("T")[0];

      // If this date is not already a property in the counts object, add it with a value of 1
      // If it is already a property, increment its value
      counts[date] = (counts[date] || 0) + 1;
    }

    // Convert the counts object to an array of objects in the format needed for the bar chart
    const data = Object.entries(counts).map(([date, value]) => {
      let obj = {};
      obj.date = date;
      obj[date] = value;
      return obj;
    });

    return [data, DateKeys];
  }

  const fetchUsersData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
        const [formattedData, datekeys] = formatDataForBarChart(data);
        console.log(datekeys);
        console.log(formattedData);
        // console.log(formattedData);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <Box mx={"sm"}>
      <Grid mt={"10vh"}>
        <GridCol span={{ base: 12, md: 6, xl: 3 }} h={"15vh"}>
          <StatCard
            stat={{
              label: "Total User",
              color: "cyan",
              progress: 70,
              stats: userList.length,
            }}
            Icon={IconUser}
          />
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={{ base: 12, md: 6 }} h={"40vh"}>
          <PieChart data={pieData} />
        </GridCol>
      </Grid>
    </Box>
  );
};

export default Dashboard;
