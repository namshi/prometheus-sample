# Prometheus sample

An example prometheus installation monitoring pods + custom metrics on k8s.

## Install

```
helm install -n sample-app charts/sample-app
helm install stable/prometheus --name prometheus -f charts/prometheus/values.yaml --namespace=kube-system
```

Point `sample-app.example.com` and `prometheus.example.com` to the external IP
of your kube LB (ingress controller, ELB, etc etc).

Open [prometheus.example.com](http://prometheus.example.com) and have fun!
