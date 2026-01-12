---
title: "Thinking React"
description: "React principles by building a dynamic, filterable robot catalog"
image: /thinkingReact.png
author: AmanShams
publishedOn: Aug 07, 2025
slug: thinking-react
---

# Thinking in React: Robot Catalog Tutorial

## Overview

React development follows a structured approach: break UI into components, build static version, identify state, determine state location, and add interactivity. This tutorial demonstrates these concepts by building a searchable robot catalog using famous movie characters.

## Initial Data Structure

```json
[
  {
    "team": "Autobots",
    "power": "High",
    "active": true,
    "name": "Optimus Prime"
  },
  { "team": "Autobots", "power": "High", "active": true, "name": "Bumblebee" },
  {
    "team": "Decepticons",
    "power": "Extreme",
    "active": false,
    "name": "Megatron"
  },
  { "team": "Avengers", "power": "High", "active": true, "name": "Vision" },
  { "team": "Villains", "power": "Extreme", "active": false, "name": "Ultron" },
  { "team": "Heroes", "power": "Medium", "active": true, "name": "Wall-E" }
]
```

## Step 1: Component Hierarchy

Break the interface into five components:

```
RobotCatalog (root container)
├── SearchControl (input field and checkbox)
└── RobotTable (displays filtered data)
    ├── TeamHeader (team group headers)
    └── RobotRow (individual robot entries)
```

## Step 2: Static Implementation

Build components without interactivity:

```jsx
function RobotRow({ robot }) {
  const name = robot.active ? (
    robot.name
  ) : (
    <span style={{ color: "red" }}>{robot.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{robot.power}</td>
    </tr>
  );
}

function TeamHeader({ team }) {
  return (
    <tr>
      <th colSpan="2">{team}</th>
    </tr>
  );
}

function RobotTable({ robots }) {
  const rows = [];
  let lastTeam = null;

  robots.forEach((robot) => {
    if (robot.team !== lastTeam) {
      rows.push(<TeamHeader team={robot.team} key={robot.team} />);
    }
    rows.push(<RobotRow robot={robot} key={robot.name} />);
    lastTeam = robot.team;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Power</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchControl({ searchText, activeOnly }) {
  return (
    <form>
      <input type="text" value={searchText} placeholder="Search robots..." />
      <label>
        <input type="checkbox" checked={activeOnly} />
        Only show active robots
      </label>
    </form>
  );
}
```

## Step 3: Identify State

Determine which data requires state management:

- **searchText**: Changes based on user input ✓
- **activeOnly**: Checkbox value that changes ✓
- **robots**: Static data passed as props ✗
- **filteredRobots**: Computed from searchText and activeOnly ✗

Required state: `searchText` and `activeOnly`

## Step 4: State Location

Both SearchControl and RobotTable need access to state values. Their common parent is RobotCatalog, which becomes the state owner.

```jsx
function RobotCatalog({ robots }) {
  const [searchText, setSearchText] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);

  return (
    <div>
      <SearchControl searchText={searchText} activeOnly={activeOnly} />
      <RobotTable
        robots={robots}
        searchText={searchText}
        activeOnly={activeOnly}
      />
    </div>
  );
}
```

## Step 5: Add Interactivity

Pass state setters to child components and add event handlers:

```jsx
function SearchControl({
  searchText,
  activeOnly,
  onSearchChange,
  onActiveOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={searchText}
        placeholder="Search robots..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={(e) => onActiveOnlyChange(e.target.checked)}
        />
        Only show active robots
      </label>
    </form>
  );
}

function RobotTable({ robots, searchText, activeOnly }) {
  const rows = [];
  let lastTeam = null;

  robots.forEach((robot) => {
    if (robot.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
    if (activeOnly && !robot.active) {
      return;
    }

    if (robot.team !== lastTeam) {
      rows.push(<TeamHeader team={robot.team} key={robot.team} />);
    }
    rows.push(<RobotRow robot={robot} key={robot.name} />);
    lastTeam = robot.team;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Power</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function RobotCatalog({ robots }) {
  const [searchText, setSearchText] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);

  return (
    <div>
      <SearchControl
        searchText={searchText}
        activeOnly={activeOnly}
        onSearchChange={setSearchText}
        onActiveOnlyChange={setActiveOnly}
      />
      <RobotTable
        robots={robots}
        searchText={searchText}
        activeOnly={activeOnly}
      />
    </div>
  );
}
```

## Complete Implementation

```jsx
import { useState } from "react";

const robotsData = [
  { team: "Autobots", power: "High", active: true, name: "Optimus Prime" },
  { team: "Autobots", power: "High", active: true, name: "Bumblebee" },
  { team: "Decepticons", power: "Extreme", active: false, name: "Megatron" },
  { team: "Avengers", power: "High", active: true, name: "Vision" },
  { team: "Villains", power: "Extreme", active: false, name: "Ultron" },
  { team: "Heroes", power: "Medium", active: true, name: "Wall-E" },
];

export default function App() {
  return <RobotCatalog robots={robotsData} />;
}
```

## Key Concepts

- **Component Hierarchy**: Organize components based on UI structure and data relationships
- **Props**: Pass data down from parent to child components
- **State**: Manage changing data using useState hook
- **Unidirectional Data Flow**: Data flows down, events bubble up
- **State Lifting**: Move state to common parent when multiple components need access
- **DRY Principle**: Compute derived values instead of storing them in state
