import React from 'react';

const PhotoGallery = React.lazy(() => import('../containers/photo-gallery/PhotoGallery'));
const FavoriteGallery = React.lazy(() => import('../containers/photo-gallery/FavoriteGallery'));

const routes = [
  { path: '/photo-gallery', exact: true, name: 'PhotoGallery', component: PhotoGallery },
  { path: '/favorite-gallery', exact: true, name: 'FavoriteGallery', component: FavoriteGallery }
];

export default routes;