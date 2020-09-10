<template>
                <ul class="nav flex-column flex-nowrap overflow-hidden">
                    <li class="nav-item">
                        <a class="nav-link text-truncate" href="#"><i class="fa fa-home"></i> <span class="d-none d-sm-inline">Overview</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-truncate" href="#"><i class="fa fa-table"></i> <span class="d-none d-sm-inline"><router-link to="/managerTicket">managerTicket</router-link></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-truncate" href="#"><i class="fa fa-table"></i> <span class="d-none d-sm-inline"><router-link to="/phone">Category</router-link></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-truncate" href="#"><i class="fa fa-table"></i> <span class="d-none d-sm-inline"><router-link to="/ticket">Ticket</router-link></span></a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link text-truncate" href="#"><i class="fa fa-table"></i> <span class="d-none d-sm-inline"><router-link to="/phone">Oder</router-link></span></a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link text-truncate" href="#"><i class="fa fa-table"></i> <span class="d-none d-sm-inline"><router-link to="/phone">Static</router-link></span></a>
                    </li>
                    <li class="nav-item"><a class="nav-link text-truncate" href="#"><i class="fa fa-download"></i> <span class="d-none d-sm-inline">Export</span></a></li>
                </ul>
</template>

<script>

</script>


<style scoped>
    .nav-link[data-toggle].collapsed:before {
    content: " ▾";
    }
    .nav-link[data-toggle]:not(.collapsed):before {
        content: " ▴";
    }
    .abc {
        background: green;
    }
</style>
