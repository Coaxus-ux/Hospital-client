<script>
    import { onMount } from "svelte";
    import { loggedValidator} from "../lib/loggedValidator";
    onMount(async () => {
      await loggedValidator();
    });
    const JWT = JSON.parse(localStorage.getItem("user"));
</script>

<h1>bienvenido doctor{ JWT.name }</h1>