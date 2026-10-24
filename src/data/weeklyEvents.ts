import type { Category } from "@/constants/categories";

export type CalendarEvent = {
  id: string;
  title: string;
  startAt: string;
  endAt: string;
  category: Category;
  location?: string;
};

export const weeklyEvents: CalendarEvent[] = [
  {
    id: "event-1",
    title: "Team standup",
    startAt: "2026-10-26T09:30:00+11:00",
    endAt: "2026-10-26T09:45:00+11:00",
    category: "work",
  },
  {
    id: "event-2",
    title: "Gym",
    startAt: "2026-10-26T17:30:00+11:00",
    endAt: "2026-10-26T18:30:00+11:00",
    category: "personal",
    location: "Local gym",
  },
  {
    id: "event-3",
    title: "Project planning",
    startAt: "2026-10-27T10:00:00+11:00",
    endAt: "2026-10-27T11:00:00+11:00",
    category: "work",
    location: "Meeting room 2",
  },
  {
    id: "event-4",
    title: "Lunch with Alex",
    startAt: "2026-10-27T12:30:00+11:00",
    endAt: "2026-10-27T13:30:00+11:00",
    category: "personal",
    location: "Corner café",
  },
  {
    id: "event-5",
    title: "Dentist",
    startAt: "2026-10-28T08:00:00+11:00",
    endAt: "2026-10-28T08:45:00+11:00",
    category: "personal",
  },
  {
    id: "event-6",
    title: "Design review",
    startAt: "2026-10-28T14:00:00+11:00",
    endAt: "2026-10-28T15:00:00+11:00",
    category: "work",
  },
  {
    id: "event-7",
    title: "Focus time",
    startAt: "2026-10-29T09:00:00+11:00",
    endAt: "2026-10-29T11:00:00+11:00",
    category: "work",
  },
  {
    id: "event-8",
    title: "Read at the park",
    startAt: "2026-10-29T16:30:00+11:00",
    endAt: "2026-10-29T17:30:00+11:00",
    category: "personal",
    location: "Carlton Gardens",
  },
  {
    id: "event-9",
    title: "Weekly wrap-up",
    startAt: "2026-10-30T15:00:00+11:00",
    endAt: "2026-10-30T15:30:00+11:00",
    category: "work",
  },
  {
    id: "event-10",
    title: "Weekend away",
    startAt: "2026-10-30T18:00:00+11:00",
    endAt: "2026-10-31T16:00:00+11:00",
    category: "travel",
    location: "Daylesford",
  },
];
