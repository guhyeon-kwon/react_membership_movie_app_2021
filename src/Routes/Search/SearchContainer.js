import React from "react";
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "../../api";

class search extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: true,
        error: null
    };

    handleSubmit = () => {
        const {searchTerm} = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    }

    searchByTerm = async () => {
        const {searchTerm} = this.state;
        try{
            const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
            const {data: {results: showResults}} = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                showResults
            })
            this.setState({loading: true});
        } catch {
            this.setState({error: "Can't find result."});
        } finally {
            this.setState({loading: false});
        }
    };

    render() {
        const {
            movieResults,
            tvResults,
            searchTerm,
            loading,
            error
        } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
            />
        );
    }
}

export default search;
