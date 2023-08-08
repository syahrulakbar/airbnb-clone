import EmptyState from "../components/EmptyState";
import { getCurrentUser } from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationClient from "./ReservationClient";

export default async function ReservationsPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login to view your reservations." />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });
  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you haven't reservations on your properties."
      />
    );
  }

  return <ReservationClient reservations={reservations} currentUser={currentUser} />;
}
