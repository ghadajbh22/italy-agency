# PARTIE DOCKER - Par Ghada

## RESPONSABILITÉS
1. Dockerisation application React
2. Optimisation image multi-stage
3. Orchestration docker-compose
4. Tests automatisés containerisés

## FICHIERS CRÉÉS
- Dockerfile (multi-stage optimisé)
- docker-compose.yml
- smoke-test.sh (tests automatisés)
- cleanup.sh (nettoyage containers)

## PROBLÈMES RÉSOLUS
1. Vite non trouvé → Suppression --only=production
2. Port 3000 occupé → Script cleanup.sh
3. Composant Footer manquant → Correction import

## COMMANDES CLÉS
docker build -t italy-agency .
docker-compose up -d
./docker-scripts/smoke-test.sh
