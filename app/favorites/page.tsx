import React from "react";
import { getCurrentUser } from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

export default async function FavoritePage() {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No Favorites Found"
        subtitle="Looks like you have not favorited any place yet."
      />
    );
  }

  return <FavoritesClient currentUser={currentUser} listings={listings} />;
}
