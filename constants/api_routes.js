export const api_routes = [
    {
        id: 1,
        route_url: '/',
        method: 'GET',
        desc: 'Route de la page d\'accueil'
    },
    {
        id: 2,
        route_url: '/dashboard',
        method: 'GET',
        desc: 'Page d\'accueil du tableau de bord'
    },
    {
        id: 3,
        route_url: '/dashboard/users',
        method: 'GET',
        desc: 'Récupérer tous les utilisateurs'
    },
    {
        id: 4,
        route_url: '/dashboard/users/create',
        method: 'POST',
        desc: 'Créer un nouvel utilisateur'
    },
    {
        id: 5,
        route_url: '/dashboard/users/id',
        method: 'GET',
        desc: 'Récupérer un utilisateur par ID'
    },
    {
        id: 6,
        route_url: '/dashboard/users/id/update',
        method: 'PUT',
        desc: 'Mettre à jour un utilisateur par ID'
    },
    {
        id: 7,
        route_url: '/dashboard/users/id/delete',
        method: 'DELETE',
        desc: 'Supprimer un utilisateur par ID'
    },
    {
        id: 8,
        route_url: '/dashboard/catways',
        method: 'GET',
        desc: 'Récupérer tous les catways'
    },
    {
        id: 9,
        route_url: '/dashboard/catways/id',
        method: 'GET',
        desc: 'Récupérer un catway par ID'
    },
    {
        id: 10,
        route_url: '/dashboard/catways/create',
        method: 'POST',
        desc: 'Créer un nouveau catway'
    },
    {
        id: 11,
        route_url: '/dashboard/catways/id/update',
        method: 'PUT',
        desc: 'Mettre à jour un catway par ID'
    },
    {
        id: 12,
        route_url: '/dashboard/catways/id/delete',
        method: 'DELETE',
        desc: 'Supprimer un catway par ID'
    },
    {
        id: 13,
        route_url: '/dashboard/reservations',
        method: 'GET',
        desc: 'Récupérer toutes les réservations'
    },
    {
        id: 14,
        route_url: '/dashboard/reservations/id',
        method: 'GET',
        desc: 'Récupérer une réservation par ID'
    },
    {
        id: 15,
        route_url: '/dashboard/reservations/create',
        method: 'POST',
        desc: 'Créer une nouvelle réservation'
    },
    {
        id: 16,
        route_url: '/dashboard/reservations/id/delete',
        method: 'DELETE',
        desc: 'Supprimer une réservation par ID'
    }
];
