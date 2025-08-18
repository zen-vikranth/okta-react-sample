{{/*
Expand the name of the chart.
*/}}
{{- define "okta-react-sample.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "okta-react-sample.fullname" -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- $fullname := printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- if .values.fullnameOverride -}}
{{- printf "%s" .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $fullname -}}
{{- end -}}
{{- end -}}

{{/*
Get the chart name and version for labeling resources.
*/}}
{{- define "okta-react-sample.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Common labels
*/}}
{{- define "okta-react-sample.labels" -}}
app.kubernetes.io/name:      {{ include "okta-react-sample.name" . }}
helm.sh/chart:               {{ include "okta-react-sample.chart" . }}
app.kubernetes.io/instance:  {{ .Release.Name }}
app.kubernetes.io/managed-by:{{ .Release.Service }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version:   {{ .Chart.AppVersion | quote }}
{{- end }}
{{- end -}}

{{/*
Selector labels
*/}}
{{- define "okta-react-sample.selectorLabels" -}}
app.kubernetes.io/name:      {{ include "okta-react-sample.name" . }}
app.kubernetes.io/instance:  {{ .Release.Name }}
{{- end -}}
