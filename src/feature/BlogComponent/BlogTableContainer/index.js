import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemLink,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const topics = [
  { id: "topic-1", title: "Topic 1" },
  { id: "topic-2", title: "Topic 2" },
  { id: "topic-3", title: "Topic 3" },
];

function TableOfContents() {
  return (
    <Box>
      <Typography component="h1">Table of contents</Typography>
      <Box>
        <div class="p-6 pt-0">
          <ul class="list-inside list-disc space-y-2">
            <li>
              <a href="#why-do-we-need-a-kv-store">
                Why do we need a KV store?
              </a>
            </li>
            <li>
              <a href="#can-we-convert-kafka-to-a-replicated-linearizable-kv-store">
                Can we convert Kafka to a replicated linearizable KV store?
              </a>
            </li>
            <li>
              <a href="#how-to-turn-kafka-into-a-replicated-linearizable-kv-store">
                How to turn Kafka into a replicated linearizable KV store?
              </a>
            </li>
            <li>
              <a href="#cap-theorem">CAP Theorem</a>
            </li>
            <li>
              <a href="#miscellaneous">Miscellaneous</a>
            </li>
            <li>
              <a href="#conclusion">Conclusion</a>
            </li>
          </ul>
        </div>
      </Box>
    </Box>
  );
}

export default TableOfContents;
