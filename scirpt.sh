docker-compose up -d
docker exec serzios_tailscale_1 tailscale up --accept-routes --authkey tskey-auth-kQ3M1B2CNTRL-gFZ8SC4vP3aJpksDStYE6aVEXxUzzDhSX
docker exec serzios_curl_1 curl -X POST --insecure https://10.0.2.8:9443/api/webhooks/f98236ed-8345-481a-b70f-d203c48e0898
docker-compose down
