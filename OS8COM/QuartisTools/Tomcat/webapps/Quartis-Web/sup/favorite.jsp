<%@ page import="java.util.Locale"%>
<%@ page import="quartisspv.util.Constants"%>
<%@ page import="quartisweb.id.user.User"%>
<%@ page import="quartisweb.id.favorite.Favorite"%>
<%@ page import="quartisweb.id.favorite.FavoriteManager"%>
<%@ page import="quartisspv.servlet.Session"%>
<%@ page import="java.util.ResourceBundle"%>
<%

            Session appSession = (Session) session.getAttribute(Constants.SESSION_ATTR);
            //String path = appSession.getInternalParameter(Constants.PATH_PARAMETER);
            String path = request.getParameter(Constants.PATH_PARAMETER2);
            ResourceBundle rb = ResourceBundle.getBundle("quartisweb/resources/private_language", new Locale(appSession.getLanguage()));

            String icon = "images/keditbookmarks.png";
            String onclick = "";
            String title = "";

            //User user = (User) session.getAttribute("user");
            String login = appSession.getLogin();

            String display = "display:inline-block;";
            //if (user != null) {
            //    String login = user.getIdentifiant();
            if (login != null) {
                try {
                    FavoriteManager favoriteManager = new FavoriteManager();
                    boolean isInFavorites = favoriteManager.isInFavorites(login, Constants.SUP_PREFIX + path);

                    icon = !isInFavorites ? "images/keditbookmarks.png" : "images/favorite_remove.png";
                    onclick = !isInFavorites ? "addToFavorites()" : "removeToFavorites()";
                    title = !isInFavorites ? rb.getString("supervisor.favorite.add") : rb.getString("supervisor.favorite.remove");
                } catch (Exception ex) {
                    display = "display:none;";
                }
            } else {
                display = "display:none;";
            }
%>
<div style="position:relative;  <%=display%>">
    <img src="<%=icon%>" onclick="<%=onclick%>" title="<%= title%>"/>
</div>
